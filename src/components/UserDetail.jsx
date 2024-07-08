function UserDetail(props) {
  const {Image,Name,Date} = props;
  return (
    <div>
      <div className="d-flex align-items-center gap-2">
        <img className="user-pic" src={require(`../images/userPics/${Image}`)} alt="userPic" />
        <div className=''>
            <h6 className='username'>{Name}</h6>
            <p className='post-date'>{Date}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetail;
