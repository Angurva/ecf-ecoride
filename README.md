Installation and configuration Ecoride application

git clone https://github.com/Angurva/ecf-ecoride.git

#docker postgresql image
#postgresql docker image (file compose.yaml)

cd ecf-ecoride

#use docker with compose to start postgresql and detach
sudo docker compose up -d
sudo docker compose ps


##### nginx ####
#conf nginx
rm -f /etc/nginx/sites-enables/default /etc/nginx/sites-availables/default
#certificate autosigned for ssl port 443 nginx

sudo mkdir /etc/ssl/private
sudo chmod 700 /etc/ssl/private

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt

sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 4096
sudo nano /etc/nginx/snippets/self-signed.conf

            ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
            ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

sudo nano /etc/nginx/snippets/ssl-params.conf

            # from https://cipherli.st/
            # and https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html

            ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
            ssl_prefer_server_ciphers on;
            ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
            ssl_ecdh_curve secp384r1;
            ssl_session_cache shared:SSL:10m;
            ssl_session_tickets off;
            ssl_stapling on;
            ssl_stapling_verify on;
            resolver 8.8.8.8 8.8.4.4 valid=300s;
            resolver_timeout 5s;
            # Disable preloading HSTS for now.  You can use the commented out header line that includes
            # the "preload" directive if you understand the implications.
            #add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
            add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";
            add_header X-Frame-Options DENY;
            add_header X-Content-Type-Options nosniff;

            ssl_dhparam /etc/ssl/certs/dhparam.pem;




sudo mv ecf-ecoride/nginx-*.conf /etc/nginx/sites-availables/
sudo mv ecf-ecoride/default /etc/nginx/sites-availables/
sudo ln -s /etc/nginx/sites-availables/default /etc/nginx/sites-enables/default
sudo ln -s /etc/nginx/sites-availables/nginx-frontend.conf /etc/nginx/sites-enables/nginx-frontend.conf
sudo ln -s /etc/nginx/sites-availables/nginx-backend.conf /etc/nginx/sites-enables/nginx-backend.conf

#move directory to nginx directory
sudo mkdir /var/www//html/ecoride
sudo mv ecf-ecoride/backend/ /var/www/html/ecoride
sudo mv ecf-ecoride/frontend/ /var/www//html/ecoride


cd /var/www//html/ecoride/backend

composer install --no-dev --prefer-dist --optimize-autoloader
cp .env.example .env

#edit .env modify sections

#configuration db SQL 
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=ecoride
DB_USERNAME=ecoride
DB_PASSWORD= #same password that in compose.yaml file 
DB_SCHEMA=ecoride

#configuration cache with Redis db nosql
CACHE_STORE=redis

php artisan key:generate
php artisan migrate
php artisan storage:link

cd /usr/share/nginx/html/ecoride/frontend
npm run build

#migrate commande of php create entities on database.
#! psql "dbname=ecoride options=--search_path=ecoride" -h 127.0.0.1 -U ecoride -f ecoride_create_tables.sql

#directory where project downloaded

cd ~/ecf-ecoride/scripts


php script_create_roles_&_admin.php
php script_create_users.php

psql "dbname=ecoride options=--search_path=ecoride" -h 127.0.0.1 -U ecoride -f ecoride_dataset.sql

#start application frontend with node
cd /usr/share/nginx/html/ecoride/frontend
npm start

#allowed www:data owner directory
sudo chown www-data:www-data -R /var/www/html/ecoride

sudo systemctl restart nginx
