 function createDreamTeam(members) {
  let str = '';
  let arr = [];
  if (Array.isArray(members) ) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        arr = members[i].split('');
        str = ''.concat(str, arr[0]);
      }
    }
    return str;
  }
  return false;
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));