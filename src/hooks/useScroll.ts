const onScrollUp = function (header: HTMLElement) {
  document.documentElement.style.setProperty("--header-height", "20vh");
  header.style.fontSize = "5rem";
};

const onScrollDown = function (header: HTMLElement) {
  document.documentElement.style.setProperty("--header-height", "5vh");
  header.style.fontSize = "2rem";
};

const useScroll = function () {
  const header = document.getElementById("header");
  if (header === null) {
    return;
  }

  document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
    ? onScrollDown(header)
    : onScrollUp(header);
};

export default useScroll;
