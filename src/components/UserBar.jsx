import {Link} from "react-router-dom";

const UserBar = () => {
  return (
    <div>
      <Link to="/SignUpPage">회원 가입</Link>
      <Link to="/LoginPage">로그인</Link>
    </div>
  );
};

export default UserBar;
