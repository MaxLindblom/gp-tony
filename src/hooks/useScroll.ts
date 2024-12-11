const onScrollUp = (header: HTMLElement) => {
  document.documentElement.style.setProperty("--header-height", "150px");
  header.style.fontSize = "5rem";
};

const onScrollDown = (header: HTMLElement) => {
  document.documentElement.style.setProperty("--header-height", "50px");
  header.style.fontSize = "2rem";
};

const useScroll = () => {
  const header = document.getElementById("header");
  if (header === null) {
    return;
  }

  document.documentElement.scrollTop > 50
    ? onScrollDown(header)
    : onScrollUp(header);
};

export default useScroll;
