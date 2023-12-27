-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-12-2023 a las 23:39:26
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clase-15`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `edad` int(10) DEFAULT NULL,
  `imagenes` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido`, `edad`, `imagenes`, `password`) VALUES
(1, 'Ana', 'Perez', 33, 'imagenes/imagen-1701866418320.png', ''),
(2, 'Mario', 'Gomez', 40, 'http://localhost:4000/imagenes/imagen-1701867344951.jpg', ''),
(3, 'Marta', 'Ruiz', 22, '', ''),
(5, 'Mauro', 'Lopez', 28, '', ''),
(6, 'Laura', 'Lepez', 44, '', ''),
(7, 'Tettra Neon', 'Perez', 11, '', ''),
(9, 'un Alumno', 'Perez', 13, '', ''),
(10, 'Alumno NUEVO ', 'NUEVO', 60, '', 'Pass123'),
(11, 'Otro alumno NUEVO ', 'NUEVO', 77, '', '$2b$10$geKaQIjjrcD3ySyQ5t0S2e7An6ATNzPU.J1PjA8Kdy9DzJy3IVkPm'),
(12, 'Otro segundo alumno NUEVO ', 'NUEVO', 77, '', '$2b$10$xqgYguAZJqJGKAPfgLZ2/OQNrdJrhqGv19lHxXj2AdXL0SYGMqNyK');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
