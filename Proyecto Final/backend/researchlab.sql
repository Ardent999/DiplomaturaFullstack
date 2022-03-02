-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 02, 2022 at 12:51 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `researchlab`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades1`
--

DROP TABLE IF EXISTS `novedades1`;
CREATE TABLE IF NOT EXISTS `novedades1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `content` text NOT NULL,
  `image_id2` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `novedades1`
--

INSERT INTO `novedades1` (`id`, `title`, `content`, `image_id2`) VALUES
(1, 'Se descubre una nueva forma de combatir al Covid-98!!', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nemo corporis tempore eligendi fugit\r\n                quod,\r\n                dolorum itaque corrupti, iure eveniet aliquid veniam harum accusamus provident distinctio molestias\r\n                quas,\r\n                sapiente natus.\r\n                Iusto explicabo fugiat animi, repudiandae consequatur laudantium mollitia provident. Quibusdam doloribus\r\n                blanditiis tempora aliquam adipisci, consectetur facere, veritatis animi nemo iusto vel vero quos error\r\n                culpa\r\n                sapiente maiores accusantium qui.\r\n                Adipisci rerum aliquam eveniet impedit omnis quos consequuntur autem, ex velit dolorum debitis saepe\r\n                sint\r\n                dolores earum cupiditate animi, provident error exercitationem amet nobis quis nulla illum. Nihil, eos\r\n                eius?', 'bqia3j8o8xgsv2xrskii'),
(2, 'El sitio estara abajo para mantenimiento durante el miercoles.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nemo corporis tempore eligendi fugit\r\n                quod,\r\n                dolorum itaque corrupti, iure eveniet aliquid veniam harum accusamus provident distinctio molestias\r\n                quas,\r\n                sapiente natus.\r\n                ', 'ybdu5zv0dbae2wnde7hz'),
(3, 'Covid-98, Descubre los mejores metodos para sobrevivirlo.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nemo corporis tempore eligendi fugit\r\n                quod,\r\n                dolorum itaque corrupti, iure eveniet aliquid veniam harum accusamus provident distinctio molestias\r\n                quas,\r\n                sapiente natus.\r\n                Iusto explicabo fugiat animi, repudiandae consequatur laudantium mollitia provident. Quibusdam doloribus\r\n                blanditiis tempora aliquam adipisci, consectetur facere, veritatis animi nemo iusto vel vero quos error\r\n                culpa\r\n                sapiente maiores accusantium qui.\r\n                Adipisci rerum aliquam eveniet impedit omnis quos consequuntur autem, ex velit dolorum debitis saepe\r\n                sint\r\n                dolores earum cupiditate animi, provident error exercitationem amet nobis quis nulla illum. Nihil, eos\r\n                eius?', 'y4vay3zg2uhgfhazppey');

-- --------------------------------------------------------

--
-- Table structure for table `usuarioslab`
--

DROP TABLE IF EXISTS `usuarioslab`;
CREATE TABLE IF NOT EXISTS `usuarioslab` (
  `id_usu` int(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `edad` int(3) NOT NULL,
  `mail` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL,
  `clearance` int(1) NOT NULL,
  PRIMARY KEY (`id_usu`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarioslab`
--

INSERT INTO `usuarioslab` (`id_usu`, `nombre`, `apellido`, `edad`, `mail`, `password`, `clearance`) VALUES
(1, 'admin', 'admin', 999, 'admin@researchlab.achuu', '21232f297a57a5a743894a0e4a801fc3', 3),
(2, 'Federico', 'Serra', 28, 'federico@researchlab.achuu', '46b7e7476b50370e516f6449b33cb36f', 2),
(3, 'Juan', 'Sefsef', 44, 'juan@researchlab.achuu', '576f55ea90e997398ae212ecacbc3d3e', 1),
(4, 'Diana', 'Asch', 942, 'diana@researchlab.achuu', '9dfdd943c0ff1c9df6e486091fdaf728', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
