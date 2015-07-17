<?
include "class.logsys.php";
/**
 * This configuration is for Subin's Blog Demos page
 * running on RedHat's OpenShift server
 */
\Fr\LS::$config = array(
  "info" => array(
    "company" => "Subin's Blog Demos",
    "email" => "mail@subinsb.com"
  ),
  "db" => array(
    "host" => "localhost",
    "port" => 3306,
    "username" => "username",
    "password" => "password",
    "name" => "database_name",
    "table" => "logSysUsers"
  ),
  "keys" => array(
    "cookie" => "myCookieKey",
    "salt" => "MySaltKey"
  ),
  "features" => array(
    "auto_init" => true
  ),
  "pages" => array(
    "no_login" => array(
      "/php/loginSystem/",
      "/php/loginSystem/reset.php",
      "/php/loginSystem/register.php"
    ),
    "login_page" => "/php/loginSystem/login.php",
    "home_page" => "/php/loginSystem/home.php"
  )
);
?>
