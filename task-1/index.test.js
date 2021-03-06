/**
 * Before we start testing APIs, let's get some practice with Jest matchers.
 * Matchers allow us to check if a value meets our expectations.
 *
 * Where necessary, have a look at the Jest docs: https://jestjs.io/docs/expect
 */

const { request } = require("http");

/**
 * Write a test that checks whether the variable `apiResponse`
 * contains an object that has the following structure:
 *
 *    {
 *      success: true
 *    }
 */
test("Has the structure { success: true }", function () {
  const apiResponse = {
    success: true,
  };
});

/**
 * Write a test that checks whether the variable `apiResponse` contains an object that 
 * has the following structure:
 *
 *    {
 *      copiesSold: any number,
 *      title: any string
 *    }
 *
 * If you're stuck on how to match any number/string, have a look at: https://jestjs.io/docs/expect#expectanyconstructor
 */
test("Has the structure { copiesSold: any number, title: any string }", function () {
  const apiResponse = {
    copiesSold: expect.any(Number),
    title: expect.any(String)
  };
});

/**
 * Write a test that checks whether the asynchronous function `getAuthentication`,
 * when called, resolves to an object that has the following structure:
 *
 *    {
 *      success: true,
 *      payload: {
 *        hasAuthenticated: true,
 *        isAdmin: false,
 *        userId: any number
 *      }
 *    }
 *
 * Since `getAuthentication` is asynchronous, you may need to read up on how to write an 
 * asynchronous test in Jest: https://jestjs.io/docs/asynchronous
 */

test("Has the structure { success: true, payload: { hasAuthenticated: true, isAdmin: false, userId: any number } }", function () {
  async function getAuthentication() {
    return {
      success: true,
      payload: {
        isAuthenticated: true,
        isAdmin: false,
        userId: 125095,
      },
    };
}
const actual = await getAuthentication();
const expected = {
        success: true,
        payload: {
          hasAuthenticated: true,
          isAdmin: false,
          userId: expect.any(Number)
        }
      }
});


/**
 * Write a test that checks whether the asynchronous function `getUsernames`, 
 * when called, resolves to an object that has the following structure:
 *
 *    {
 *      success: true,
 *      payload: an array of objects with the structure { username: any string },
 *    }
 *
 * Only the function has been provided. You'll have to write everything else.
 *
 * Since `getUsernames` is asynchronous, you may need to read up on 
 * how to write an asynchronous test in Jest: https://jestjs.io/docs/asynchronous
 */
describe('GET /userNames', function(){
  it('responds with json', function (done) {
      request(app)
      .get('/user')
      .set ('Accept','application/json')
      .expect ('Content-Type', /json/)
      .expect (200,done);
  }
});

async function getUsernames() {
  return {
    success: true,
    payload: [
      { username: "A" },
      { username: "B" },
      { username: "C" },
      { username: "D" },
    ],
    const actual = await getUsernames();
    
    const expected = {
          success: true,
          payload: an array of objects with the structure { username: any string },
};
}
}

