import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Logo(props) {
  return (
    <Svg
      width={162}
      height={170}
      viewBox="0 0 162 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.917 11.478c-1.584-.883-3.628-1.481-6.912-1.478-3.29.003-5.339.603-6.924 1.486-1.642.914-3.177 2.345-5.156 4.704-9.488 13.286-23.24 37.922-35.096 61.41-5.93 11.747-11.338 23.113-15.45 32.497-4.192 9.567-6.824 16.605-7.491 19.945-1.448 7.237 1.325 15.106 7.012 21.101 5.663 5.969 13.76 9.576 22.164 8.735 7.962-.796 16.51-6.081 23.768-12.177 4.452-3.739 8.128-7.532 10.514-10.164-17.655-20.015-38.594-68.863 2.6-74.24a31.193 31.193 0 018.108 0c41.194 5.377 20.255 54.225 2.6 74.24 2.386 2.632 6.061 6.425 10.514 10.164 7.258 6.096 15.806 11.381 23.768 12.177 8.405.841 16.501-2.766 22.164-8.735 5.687-5.995 8.46-13.864 7.012-21.101-.893-4.465-4.319-13.143-9.445-24.297-5.037-10.962-11.476-23.814-18.061-36.367-6.581-12.548-13.284-24.753-18.838-34.412-5.669-9.859-9.883-16.604-11.578-18.638-2.037-2.444-3.6-3.916-5.273-4.85zM81 145.078c2.609 2.824 6.317 6.569 10.737 10.281 7.613 6.394 18.116 13.361 29.204 14.47 11.934 1.193 22.957-3.944 30.413-11.803 7.432-7.834 11.778-18.878 9.564-29.946-1.16-5.801-5.117-15.527-10.164-26.51-5.136-11.175-11.66-24.193-18.292-36.836-6.634-12.649-13.399-24.968-19.025-34.753-5.512-9.586-10.191-17.206-12.564-20.054-2.294-2.752-4.798-5.348-8.085-7.182C89.413.862 85.608-.005 80.995 0c-4.606.005-8.408.87-11.78 2.75-3.287 1.83-5.792 4.422-8.088 7.177l-.117.14-.106.149C50.934 24.133 36.835 49.452 24.9 73.094 18.914 84.957 13.423 96.491 9.22 106.083c-4.123 9.409-7.223 17.424-8.138 21.997-2.214 11.068 2.132 22.112 9.564 29.946 7.456 7.859 18.479 12.996 30.413 11.803 11.088-1.109 21.59-8.076 29.204-14.47 4.42-3.712 8.128-7.457 10.737-10.281zm0-15.132c11.823-13.581 34.215-52.627 2.76-56.732-1.839-.24-3.68-.24-5.52 0-31.455 4.105-9.063 43.151 2.76 56.732z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Logo;
