import loading from "public/svgs/Spinner.gif";

// const style = {
//    width 70
//   fontFamily: "var(--font-chab)",
//   color: "var(--coloe-pink1)",

// };
export default function Loading() {
  return (
    <div style={style}>
      잠지만...잠지만요...
      <img src={loading} alt='로딩중' width='5%' />
    </div>
  );
}
