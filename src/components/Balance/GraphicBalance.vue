<template>
<svg style="width:100%" width="400" height="200" perserveAspectRatio="xMaxYMax"></svg>
</template>

<script>
import * as d3 from 'd3';
import _ from 'underscore';
import accounting from 'accounting';

const ratio = 2;

export default {
  name: 'GraphicBalance',
  props: ['Accounts', 'Transactions'],
  data() {
    return {
      svg: undefined,
      margin: {
        top: 20,
        right: 80,
        bottom: 30,
        left: 50
      },
      width: undefined,
      height: undefined,
      g: undefined,
      viewBox: undefined,
    }
  },
  computed: {
    AccountTransactions() {

      if (!this.Transactions.length) {
        return [];
      }

      let accs = {
        BalanceGeneral: {
          Name: 'Balance General',
          BalanceFinal: 0,
          Balance: 0,
          Transactions: []
        }
      }

      for (let p in this.Accounts) {
        if (p == '.key') {
          continue;
        }
        accs[p] = {
          Name: this.Accounts[p].Name,
          BalanceFinal: this.Accounts[p].Balance,
          Balance: 0,
          Transactions: []
        }
        accs.BalanceGeneral.BalanceFinal += this.Accounts[p].Balance;
      }

      _.each(this.Transactions, t => {
        if (t.From && accs[t.From]) {
          accs.BalanceGeneral.Balance -= t.Amount;
          accs[t.From].Balance -= t.Amount;
          accs[t.From].Transactions.push({
            Name: accs[t.From].Name,
            Balance: accs[t.From].Balance,
            Date: t.Date,
            RawTransaction: t
          });
        }
        if (t.To && accs[t.To]) {
          accs.BalanceGeneral.Balance += t.Amount;
          accs[t.To].Balance += t.Amount;
          accs[t.To].Transactions.push({
            Name: accs[t.To].Name,
            Balance: accs[t.To].Balance,
            Date: t.Date,
            RawTransaction: t
          });
        }

        accs.BalanceGeneral.Transactions.push({
          Name: accs.BalanceGeneral.Name,
          Balance: accs.BalanceGeneral.Balance,
          Date: t.Date,
          RawTransaction: t
        })
      });

      return _.values(accs);
    }
  },
  watch: {
    AccountTransactions() {
      this.PaintData();
    }
  },
  methods: {
    UpdateSize() {
      this.svg = d3.select('svg');
      let width = this.$el.clientWidth;
      let height = width / ratio;
      this.svg.attr('width', width);
      this.svg.attr('height', height);
      if (!this.viewBox) {
        this.viewBox = `0 0 ${width} ${height}`
        this.svg.attr('viewBox', this.viewBox);
      }

      this.svg.style('height', height);

    },
    PaintData() {

      d3.selectAll("svg > *").remove();

      if (!this.Transactions.length) {
        return;
      }

      var vm = this;

      this.width = this.svg.attr('width') - this.margin.left - this.margin.right;
      this.height = this.svg.attr('height') - this.margin.top - this.margin.bottom;
      this.g = this.svg.append('g').attr('transform', `translate(${this.margin.left},${this.margin.top})`);
      var svg = this.svg;
      var parseTime = d3.timeParse("%Y%m%d");
      var bisectDate = d3.bisector(d => d.Date).left;

      var x = d3.scaleTime().range([0, this.width]),
        y = d3.scaleLinear().range([this.height, 0]),
        z = d3.scaleOrdinal(d3.schemeCategory10);

      var voronoi = d3.voronoi()
        .x(d => x(d.Date))
        .y(d => y(d.Balance))
        .extent([
          [-this.margin.left, -this.margin.top],
          [this.width + this.margin.right, this.height + this.margin.bottom]
        ]);

      // var line = d3.line()
      //   .curve(d3.curveBasis)
      //   .x(d => x(d.Date))
      //   .y(d => y(d.Balance / 100));

      var line = d3.line()
        //.defined(d => d)
        .curve(d3.curveMonotoneX)
        .x(d => x(d.Date))
        .y(d => y(d.Balance));

      var dateRange = d3.extent(this.Transactions, t => t.Date);
      x.domain(dateRange);

      y.domain([
        d3.min(this.AccountTransactions, at => d3.min(at.Transactions, t => t.Balance)),
        d3.max(this.AccountTransactions, at => d3.max(at.Transactions, t => t.Balance))
      ]);

      z.domain(this.AccountTransactions.map(at => at.Name));

      this.g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3.axisBottom(x));

      this.g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(6).tickFormat(n => accounting.formatMoney(n / 100)))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .text("Balance");

      var acc = this.g.selectAll(".transaction")
        .data(this.AccountTransactions)
        .enter()
        .append("g")
        .attr("class", "transaction");

      acc.append("path")
        .attr("class", "line")
        .attr("d", function(at) {
          at.line = this
          return line(at.Transactions)
        })
        .style("stroke", at => z(at.Name));

      acc.append("text")
        .attr("transform", d => "translate(" + x(dateRange[1]) + "," + y(d.BalanceFinal) + ")")
        .attr("x", 3)
        .attr("dy", "0.35em")
        .style("font", "10px sans-serif")
        .text(d => d.Name);

      var transactionsMerged = d3.merge(vm.AccountTransactions.map(d => d.Transactions))
      this.g.selectAll(".dot")
        .data(transactionsMerged)
        .enter()
        .append("circle")
        .attr("class", "dot")
        //.attr("cx", line.x())
        .attr("cx", function(p) {
          p.point = this;
          return line.x()(p);
        })
        .attr("cy", line.y())
        .attr("r", 3.5)
        .style("stroke", at => z(at.Name));

      var focus = this.g.append("g")
        .attr("transform", "translate(-100,-100)")
        .attr("class", "focus");

      focus.append("circle")
        .attr("r", 2);

      focus.append("text")
        .attr("y", -10);

      var voronoiGroup = this.g.append("g")
        .attr("class", "voronoi");

      var voroniData = voronoi.polygons(transactionsMerged);
      voronoiGroup.selectAll("path")
        .data(voroniData)
        .enter().append("path")
        .attr("d", function(d) {
          return d ? "M" + d.join("L") + "Z" : null;
        })
        .on('mouseover', d => {
          focus.attr("transform", "translate(" + x(d.data.Date) + "," + y(d.data.Balance) + ")");
          focus.select("text").text(accounting.formatMoney(d.data.Balance / 100));
        })
        .on('mouseout', d => {
          focus.attr("transform", "translate(-100,-100)");
        })
        .on('click', d => {
          vm.$emit('TransactionSelected', d.data.RawTransaction);
        });
    }
  },
  mounted() {

    this.UpdateSize();
    this.PaintData();

    window.addEventListener('resize', this.UpdateSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.UpdateSize);
  }

}
</script>


<style>
.axis--x path {
  display: none;
}

.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 1.5px;
}

.dot {
  fill: white;
  stroke: steelblue;
  stroke-width: 1.5px;
}

.voronoi path {
  fill: none;
  pointer-events: all;
  stroke: green;
  stroke-opacity: 0.1;
}
</style>
