<?php declare(strict_types = 1);

define('HOST','localhost');
define('DB','ecoride');
define('USR','ecoride');
define('PWD','3c0R1dE!P@sSw0rD!AdM1');
define('DSN','pgsql:host='.HOST.';dbname='.DB);
define('OPT', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
]);

$pdo = new \PDO(DSN,USR,PWD,OPT);

$req = $pdo->prepare("INSERT INTO ecoride.users(username, firstname, lastname, email, password, phone, address, birth_date, credit, is_enabled ) VALUES (:username, :firstname, :lastname, :email, :password, :phone, :address, :birth_date, :credit, :is_enabled)");
$req->bindValue(':username', 'cunegonde');
$req->bindValue(':firstname', 'cunegonde');
$req->bindValue(':lastname', 'lacroix');
$req->bindValue(':email', 'clacroix@test.fr');
$req->bindValue(':password', \password_hash('Pa$$0rdUltr@Str0ng', PASSWORD_BCRYPT));
$req->bindValue(':phone', '0123456789');
$req->bindValue(':address', '20 rte. des joyeux 69870 grandris');
$req->bindValue(':birth_date', '1985-09-09');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, firstname, lastname, email, password, phone, address, birth_date, credit, is_enabled ) VALUES (:username,:firstname, :lastname,:email, :password, :phone, :address, :birth_date, :credit, :is_enabled)");
$req->bindValue(':username', 'gertrude');
$req->bindValue(':firstname', 'giselle');
$req->bindValue(':lastname', 'dupont');
$req->bindValue(':email', 'gdupont@test.fr');
$req->bindValue(':password', \password_hash('PAss0rdUltr@Str0ng', PASSWORD_BCRYPT));
$req->bindValue(':phone', '0123459876');
$req->bindValue(':address', '40 av. des heureux 69870 grandris');
$req->bindValue(':birth_date', '2000-02-24');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, firstname, lastname, email, password, phone, address, birth_date, credit, is_enabled ) VALUES (:username,:firstname, :lastname, :email, :password, :phone, :address, :birth_date, :credit, :is_enabled)");
$req->bindValue(':username', 'juliette');
$req->bindValue(':firstname', 'juliette');
$req->bindValue(':lastname', 'romeo');
$req->bindValue(':email', 'jromeo@test.fr');
$req->bindValue(':password', \password_hash('P@s$0rdultrAStr0ng', PASSWORD_BCRYPT));
$req->bindValue(':phone', '3216549870');
$req->bindValue(':address', '320 rue des gai 69870 grandris');
$req->bindValue(':birth_date', '1981-08-24');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, firstname, lastname, email, password, phone, address, credit, is_enabled) VALUES (:username,:firstname, :lastname ,:email, :password, :phone, :address, :credit, :is_enabled)");
$req->bindValue(':username', 'guenievre');
$req->bindValue(':firstname', 'isabel');
$req->bindValue(':lastname', 'fontaine');
$req->bindValue(':email', 'ifontaine@test.fr');
$req->bindValue(':password', \password_hash('P@s$0rdultrAStr0ng', PASSWORD_BCRYPT));
$req->bindValue(':phone', '6549873210');
$req->bindValue(':address', '612 rue des merveilleux 69870 grandris');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, firstname, lastname, email, password, phone, address, credit, is_enabled ) VALUES (:username,:firstname, :lastname, :email, :password, :phone, :address, :credit, :is_enabled)");
$req->bindValue(':username', 'mathilda');
$req->bindValue(':firstname', 'pedro');
$req->bindValue(':lastname', 'fontaine');
$req->bindValue(':email', 'mpedro@test.fr');
$req->bindValue(':password', \password_hash('P@s$0rdultr@Str0ng', PASSWORD_BCRYPT));
$req->bindValue(':phone', '0913785264');
$req->bindValue(':address', '234 rte. des magnifiques 69870 grandris');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, email, password, address, credit, is_enabled ) VALUES (:username, :email, :password, :address, :credit, :is_enabled)");
$req->bindValue(':username', 'mirador');
$req->bindValue(':email', 'mdor@test.fr');
$req->bindValue(':password', \password_hash('P@s$0rdultr@Str0ng', PASSWORD_BCRYPT));
$req->bindValue(':address', '234 rte. des magnifiques 69870 grandris');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, email, password, address, credit, is_enabled ) VALUES (:username, :email, :password, :address, :credit, :is_enabled)");
$req->bindValue(':username', 'prudence');
$req->bindValue(':email', 'pfosse@test.fr');
$req->bindValue(':password', \password_hash('P@s$0rdultr@Str0ng', PASSWORD_BCRYPT));
$req->bindValue(':address', '98 av. des stupéfiants 69870 grandris');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username, email, password, address, credit, is_enabled ) VALUES (:username, :email, :password, :address, :credit, :is_enabled)");
$req->bindValue(':username', 'milady');
$req->bindValue(':email', 'vjynx@test.fr');
$req->bindValue(':password', \password_hash('P@s$0rdultr@Str0ng', PASSWORD_BCRYPT));
$req->bindValue(':address', '47 av. des epoustouflants 69870 grandris');
$req->bindValue(':credit',20);
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();

$req = $pdo->prepare("INSERT INTO ecoride.users(username,firstname, lastname, email, password, is_enabled ) VALUES (:username,:firstname, :lastname, :email, :password, :is_enabled )");
$req->bindValue(':username', 'ecoride-thomas');
$req->bindValue(':firstname', 'thomas');
$req->bindValue(':lastname', 'angurva');
$req->bindValue(':email', 'tangurva@ecoride.fr');
$req->bindValue(':password', \password_hash('PasswordFacile', PASSWORD_BCRYPT));
$req->bindValue(':is_enabled', true );
$req->execute();
$req->closeCursor();
