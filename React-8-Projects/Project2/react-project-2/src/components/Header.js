import Group from '../assets/Group.png'

export default function Header() {
    return (
        <div className='main--header'>
            <div className="img-container">
                <img src={Group} alt="" />
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}