import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <ol>
                <li>
                    <NavLink exact to="/CargarPromos" activeClassName="active">
                        Carga Promos
                    </NavLink>
                    <NavLink exact to="/PromosView" activeClassName="active">
                        Ver Promos
                    </NavLink>
                    <NavLink exact to="/SucufView" activeClassName="active">
                        Ver Sucur
                    </NavLink>
                </li>
            </ol>
        </nav>
    )
}
