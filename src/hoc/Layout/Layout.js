import classes from './Layout.module.scss';

const Layout = props => {
    return (
        <main className={classes.Layout}>
            <div>
                {props.children}
            </div>
        </main>
    )
}

export default Layout
