// Function to post fetch api
export async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    let rdata = await response.json(); // parses JSON response into native JavaScript objects
    return rdata;
  }
  // await postdata('/home',blob);
export async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const movies = await response.json();
  return movies;
}
