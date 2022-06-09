// Code your solution here
function findMatching(source, sought) {
    return source.filter(
      (Match) => Match.toLowerCase() == sought.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (Match) =>
        Match.toLowerCase().indexOf(testString.toLowerCase()) == 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name == soughtName);
  }