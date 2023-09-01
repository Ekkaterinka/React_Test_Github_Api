import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails } from '../redux/slices/detailsSlice';

type Params = {
  login: any;
};

export default function Details() {
  const items = useSelector((state: any) => state.details.data);
  const error = useSelector((state: any) => state.details.errors);
  const dispatch = useDispatch();
  const { login } = useParams<Params>();

  function repeatRequest() {
    dispatch(getDetails(login));
  };
  useEffect(() => {
    dispatch(getDetails(login));
  }, [login]);

  return (
    <div >
      {error && <div className='Error'><p>Произошла ошибка!</p><button onClick={repeatRequest}>Повторить запрос.</button></div>}
      <div className="DetailsUser">
        <img src={items.avatar_url} className="AvatarUser" />
        <div>
          <h3>{items.login}</h3>
          <p>Репозитории: {items.public_repos}</p>
          <Link to={items.html_url} target="blank" >Ссылка на профиль</Link>
        </div>
      </div>
    </div>
  );
}