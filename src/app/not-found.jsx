import loading from "public/svgs/Spinner.gif";

const iframeStyle = {
  width: "99%",
  height: "99%",
  boxSizing: "border-box",
};
const style = {
  // width: "99%",
  // height: "99%",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  // fontFamily: "var(--font-chab)",
  // fontSize: "44px",
  // color: "var(--color-pink1)",
  // textShadow: "rgba(63, 71, 77, 0.25) 0px 2px 10px",
};

export default function NotFound() {
  return (
    // <iframe
    //   src='https://lottie.host/?file=d176744a-bc5f-4764-a79d-e3204e3334f1/J1SJBdsjst.json'
    //   style={iframeStyle}
    // ></iframe>
    <div style={style}>
      잠지만...잠지만요...
      <img src={loading} alt='로딩중' width='5%' />
    </div>
  );
}
