const mapper = {

  assing(source, newValues) {
    for (let p in newValues) {
      if (source.hasOwnProperty(p)) {
        source[p] = newValues[p];
      }
    }
  }
}

export default mapper
