import classes from './Home.module.css';
import code from './../../img/code-typing.svg';

const Home = () => {

    return (
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello everybody! </h1>
                <h1>Welcome to my portfolio.</h1>
            </div>
            <img className={classes.code} src={code} alt="code"></img>
            
        </div>
    );
}

export default Home;