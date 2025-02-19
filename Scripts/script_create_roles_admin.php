<?php declare(strict_types = 1);

define('HOST','127.0.0.1');
define('DB','ecoride');
define('USR','ecoride');
define('PWD','3c0R1dE!P@sSw0rD!AdM1');
define('ADMIN_PWD','PassworAdminEasy');
define('DSN','pgsql:host='.HOST.';dbname='.DB);
define('OPT', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_CASE => PDO::CASE_NATURAL,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
]);

$pdo = new \PDO(DSN,USR,PWD,OPT);
/**insertion des roles */
$req = $pdo->prepare("INSERT INTO ecoride.roles(name) VALUES (:name)");
$req->bindValue(':name', 'administrator');
$req->execute();

$req = $pdo->prepare("INSERT INTO roles(name) VALUES (:name)");
$req->bindValue(':name', 'employee');
$req->execute();

$req = $pdo->prepare("INSERT INTO roles(name) VALUES (:name)");
$req->bindValue(':name', 'passenger');
$req->execute();

$req = $pdo->prepare("INSERT INTO roles(name) VALUES (:name)");
$req->bindValue(':name', 'driver');

$req->execute();
$req->closeCursor();

/** insertion du compte admin */
$req = $pdo->prepare("INSERT INTO ecoride.users(username, email, password, is_enabled ) VALUES (:username, :email, :password, :is_enabled)");
$req->bindValue(':username', 'admin');
$req->bindValue(':email', 'admin@ecoride.fr');
$req->bindValue(':password', \password_hash(ADMIN_PWD, PASSWORD_BCRYPT)); /** encryptage du mot de passe */
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

/** Récupération de l'id du role admin */
$req = $pdo->prepare("SELECT id FROM ecoride.users WHERE (username LIKE 'admin')");
$req->execute();
$result = $req->fetch();

/** affectation du role administrator à l'utilisateur admin */
$req = $pdo->prepare("INSERT INTO ecoride.role_user(role_id, user_id) VALUES(:role_id, :user_id)");
$req->bindValue(':role_id', 1);
$req->bindValue(':user_id', $result["id"]);
$req->execute();
$req->closeCursor();
