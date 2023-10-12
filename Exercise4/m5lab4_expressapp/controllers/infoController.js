const findInfo = (req,res) => {
    console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept
  //Line 67 - 70  with reference of https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
  const myHeaders = new Headers();
  //myHeaders.append("Content-Type", "image/jpeg");
  myHeaders.get("Content-Type");
  console.log(`Content-type is: ${myHeaders.get("Content-Type")}`); //null
  console.log(`Content-Type is: ${req.headers["content-type"]}`); //undefined
  res.json(
    `User-Agent is: ${req.headers["user-agent"]}. Accept headers is: ${req.headers.accept}`
  );
}

module.exports = {findInfo,};