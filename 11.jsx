const Card = (prop) => {
	return (
    <div>
      <img width='100' src={prop.avatar_url} />
      <div style={{fontWeight: 'bold'}}>
        {prop.name}
      </div>
      <div>
        {prop.company}
      </div>
      <div>
        {prop.bio}
      </div>
    </div>
  )
}

let user = {
	avatar_url: 'https://avatars2.githubusercontent.com/u/12496512?v=4',
  name: 'Roman Krasavtsev',
  bio: 'Passionate Software Engineer with DevOps mindset'
}
ReactDOM.render(<Card {...user} />, mountNode);
