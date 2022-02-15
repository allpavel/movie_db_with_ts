import React from "react"
import "./normalize.css"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { ErrorPage } from "./pages/ErrorPage"
import { Home } from "./pages/Home"
import { Lists } from "./pages/Lists"
import { Movies } from "./pages/Movies"
import { Trailers } from "./pages/Trailers"
import { TVShows } from "./pages/TVShows"
import { Login } from "./pages/Login"
import { MoviePage } from "./pages/MoviePage"
import { UserProvider } from "./context"

export const App: React.FC = () => {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="tvshows" element={<TVShows />} />
                    <Route path="movie">
                        <Route index element={<Movies />} />
                        <Route path=":id" element={<MoviePage />} />
                    </Route>
                    <Route path="trailers" element={<Trailers />} />
                    <Route path="lists" element={<Lists />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </UserProvider>
    )
}
