import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader';
import me from './../../img/photoCV.jpeg';

const About = () => {

    return (
        <div className={ classes.AboutMe} id="about">
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h1> Hello! I'm Diana.</h1>
                    <h2>Third year student</h2>
                    <p>A tech lover with proven programming skills and a logical mind, ready to start a career!</p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt='me'></img>
                </div>
            </div>
        </div>
    );
}

export default About;