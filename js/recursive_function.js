// recusrsive function
// function calling itself

function hello() {

  console.log("hello");
  hello();
}

hello();


// find factorial of number using recusrsive function
// 5!
// 5*4*3*2*1

function facto(n) {

  if (n == 1) {
    return 1
  }
  return n * facto(n - 1);
}
