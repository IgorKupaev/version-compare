function versionComp(ver1, ver2) {
  const first = ver1.split('.');
  const second = ver2.split('.');
  for (let i = 0; i < first.length && i < second.length; i++) {
    if (Number(first[i]) < Number(second[i])) return `${first} < ${second}`;
    if (Number(first[i]) > Number(second[i])) return `${first} > ${second}`;
  }
  if (first.length > second.length) {
    for (let i = second.length; i < first.length; i++) {
      if (first[i] > 0) {
        return `${first} > ${second}`;
      }
    }
  };
  if (first.length < second.length) {
    for (let i = first.length; i < second.length; i++) {
      if (second[i] > 0) {
        return `${first} < ${second}`
      }
    }
  };
  return `${first} = ${second}`;
}
console.log(versionComp("2.0.0","2.0.0.0.0.0.0.0.1"));
console.log(versionComp("1.0.0","2.0.0"));
console.log(versionComp("1.0.0","1.0.0"));
console.log(versionComp("1.0","1.0.0"));
console.log(versionComp("1.2.1","1.2.0"));
console.log(versionComp("1.2.1","1.2.1.99"));
console.log(versionComp("1.2.1","1.2.1.1.99"));
console.log(versionComp("1.0","1.0.0.1"));