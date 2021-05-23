import classes from './Projects.module.css';
import PageHeader from './../PageHeader/PageHeader';
import proj from './../../img/projects.svg';


const Projects = () => {

    return (
        <div className={classes.Projects} id="projects">
            <PageHeader title={'Projects'} />
            <div className={classes.Container}>
                <div className={ classes.WebMobile}>
                    <div className={classes.Text}>
                        <h2>Web and mobile application for food ordering</h2>
                        <p>We developed an app for food ordering in a team of 4. The backend is written in Java on Spring Boot framework and the data is stored in MySQL databases. The frontend uses Angular framework for both web and mobile, the mobile being developed with Ionic. We connected the frontend with the backend through HTTP protocols.</p>
                        <h2>Web Page for furniture store</h2>
                        <p>I developed a website for a furniture store using Bootstrap for frontend and MySQL for storing the data.</p>
                    </div>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Proj} src={proj} alt='proj'></img>
                </div>
                <div className={classes.Desktop}>
                    <div className={classes.Text}>
                        <h2>Desktop Application for a gym shop</h2>
                        <p>An application written in Java with the purpose of learning to work in a team using Github and Jira.</p>
                    </div>
                    <div className={classes.Text}>
                        <h2>Image Processing System for Traffic Lights Detection Using Raspberry Pi</h2>
                        <p>The system consists of real time image processing algorithms, both clasic computer vision algorithms as well as machine learning (deep learning) algorithms running on a Raspberry Pi 4 with a video camera attached.</p>
                    </div>
                </div>
            </div>
        </div>
           
    );
}

export default Projects;