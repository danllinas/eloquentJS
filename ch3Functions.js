function landscape() {
  var result = "";
  function flat(size){
    for(var count = 0; count < size; count++){
      result += "_";
    }
  };
  function mountain(size){
    result += "/";
    for(var count = 0; count < size; count++){
      result += "'"
    };
    result += "\\";
  };

  flat(2);
  mountain(1);
  mountain(1);
  mountain(2);
  flat(1);
  return result;
};

console.log(landscape());
