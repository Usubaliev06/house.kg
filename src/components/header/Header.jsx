import css from "./Header.module.css"

const Header = () => {
    return (
        <div className={css.wrapper}>
            <header className={`container ${css.header}`}>

                <h1>Solid House</h1>

                <nav>
                <a href="">Вся недвижимость</a>
                <a href=""> О нас </a>
                <a href="">Контакты</a>
                </nav>

            </header>
        </div>
    );
}

export default Header;
