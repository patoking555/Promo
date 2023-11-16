import {
    BrowserRouter as Router,
    HashRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import { CargarPromos } from './CargarPromos';
import { Menu } from "./Menu";
import { PromosView } from './PromosView';
import { SucufView } from './SucufView';


export const ComponentePromos = () => {
    return (
        <nav>
            <h2>PROMOCIONES</h2>
                <a href="/CargarPromos">Cargar Promos</a>
                <a href="/PromosView"> Ver Promociones</a>
                <a href="/SucufView"> Ver Sucursales</a>

            {/* <HashRouter>
                <Menu />
                <Routes>
                    <Route exact path="/CargarPromos" component={CargarPromos} />
                    <Route exact path="/PromosView" component={PromosView} /> <Route/>
                    <Route exact path="/SucufView" component={SucufView} />
                    {/* <Route exact path="/PromosView">
                        <Route element={<Navigate to="/PromosView" />} />
                    </Route>
                    <Route exact path="/SucufView">
                        <Route element={<Navigate to="/SucufView" />} />
                    </Route> */}
                {/* </Routes>
            </HashRouter> */} 
        </nav>
    )
}
