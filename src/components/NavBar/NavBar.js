import classes from "./NavBar.module.css";

const NavBar = () => {

    return (
        <div className={classes.NavBar}>
            <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#about">About</a>
                </li>
                <li>
                    <a href="/#skills">Skills</a>
                </li>
                <li>
                    <a href="/#projects">Projects</a>
                </li>
                <li>
                    <a href="/#education">Education</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
                </ul>
            </nav>
        </div>
        );
}

export default NavBar;