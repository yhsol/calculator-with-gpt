console.log("renderer.js");

const information = document.getElementById("information");
information.innerHTML = `This app is using Chrome (v${windows.versions.chrome()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

func();
