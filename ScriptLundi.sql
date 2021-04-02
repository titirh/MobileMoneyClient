Create database mobile_money;
Create role mobile_money login password '123456';
alter database mobile_money owner to mobile_money;


CREATE TABLE Offres 
(
    id_offre serial PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    montant double precision NOT NULL,
    type VARCHAR(15) NOT NULL,
    valeur varchar(50) NOT NULL,
    code VARCHAR(20)
);
------new------
ALTER SEQUENCE Offres_id_offre_seq RESTART WITH 400 INCREMENT BY 1;

create table utilisateur(
    id_utilisateur serial primary key,
    token varchar(250), 
    username varchar(50),
    password varchar(250)
);
------new-------
ALTER SEQUENCE utilisateur_id_utilisateur_seq RESTART WITH 30000 INCREMENT BY 1;

create table clients(
    id_utilisateur int references utilisateur(id_utilisateur),
    nom varchar(100),
    prenom varchar(100),
    date_naissance timestamp,
    numero varchar(10)
);

---new  comptes
create table comptes(

    id_utilisateur int references utilisateur(id_utilisateur),
    credit double precision NOT NULL,
    solde double precision NOT NULL,
    type_offre varchar(40) not NULL,
    valeur_offre varchar(50) NOT NULL,
    date_expiration timestamp,
    date_solde timestamp
); 
--------------

create table mouvement_credit(

    id_mouvement serial primary key,
    id_utilisateur int references utilisateur(id_utilisateur),
    type varchar(20),  -----Creditation(++),Achat(--),
    id_offre int, 
    montant varchar(50), 
    date_mouvement timestamp
);
-----new
ALTER SEQUENCE mouvement_credit_id_mouvement_seq RESTART WITH 8000 INCREMENT BY 1;

create table mouvement_money(

    id_mouvement serial primary key,
    id_utilisateur int references utilisateur(id_utilisateur),
    type varchar(20), ------Depot(++),Creditation(++), Achat(--)
    montant double precision,
    date_mouvement timestamp,
    status varchar(15)
);
--new
ALTER SEQUENCE mouvement_money_id_mouvement_seq RESTART WITH 9000 INCREMENT BY 1;

---new APPEL----

CREATE TABLE Appels(

    id_appel SERIAL PRIMARY KEY,
    id_utilisateur int references utilisateur(id_utilisateur),
    numero_entrant VARCHAR(15) NOT NULL,
    numero_sortant VARCHAR(15) NOT NULL,
    tarif_solde double precision,
    tarif_credit double precision,
    duree double precision,
    date_appel timestamp
);
ALTER SEQUENCE Appels_id_appel_seq RESTART WITH 8000 INCREMENT BY 1;

--------------

--INSERT INTO Offres(nom,montant,type,valeur,code) VALUES('Mora 500',500,'Appel','1000;10;20','#322*50#');
--INSERT INTO Offres(nom,montant,type,valeur,code) VALUES('Mora 1000',100,'Appel','2000;20;50','#322*67#');

--insert into utilisateur values(1,'fdskjfb3b543jk5kj543','titirh','123456');

--insert into clients values(1,'Rakoto','francis','1999-03-15 00:00:00','0341212312');
--insert into clients values(2,'Rabe','koto','1999-03-15 00:00:00','0341212312');
--insert into clients values(3,'Ranaivo','nirina','1999-03-15 00:00:00','0341212312');
--insert into clients values(4,'Ralouis','gerard','1999-03-15 00:00:00','0341212312');
--insert into clients values(5,'Rajean','bas','1999-03-15 00:00:00','0341212312');

--insert into mouvement_credit values(1,1,'credit',0,5000,'2021-03-15 08:00:00');
--insert into mouvement_credit values(0,1,'credit',0,1000,'2021-03-15 08:00:00');
--insert into mouvement_credit values(0,2,'credit',0,500,'2021-03-15 08:00:00');
--insert into mouvement_credit values(0,2,'credit',0,4000,'2021-03-15 08:00:00');
--insert into mouvement_credit values(0,3,'credit',0,3000,'2021-03-15 08:00:00');
--insert into mouvement_credit values(0,4,'credit',0,2500,'2021-03-15 08:00:00');

--insert into mouvement_money values(1,1,1,'depot',3000,'2021-03-15 08:00:00','1234');

--create or replace view sumCredit as
--select comptes.id_utilisateur,sum(mouvement_credit.montant) as credit,comptes.solde,
--comptes.mega,comptes.appel from comptes left join mouvement_credit on comptes.id_utilisateur=mouvement_credit.id_utilisateur
--where mouvement_credit.type='credit' group by mouvement_credit.id_utilisateur,comptes.id_utilisateur,comptes.solde,comptes.mega,comptes.appel;

--create or replace view sumDepot as
--select comptes.id_utilisateur,comptes.credit,sum(mouvement_money.montant) as solde,
--comptes.mega,comptes.appel from comptes left join mouvement_money on comptes.id_utilisateur=mouvement_money.id_compte2
--where mouvement_money.type='depot' group by mouvement_money.id_compte2,comptes.id_utilisateur,comptes.credit,comptes.mega,comptes.appel;

--create or replace view sumTotal as
--select sumcredit.id_utilisateur,sumcredit.credit,sumdepot.solde,sumcredit.mega,sumcredit.appel 
--from sumcredit left join sumdepot on sumcredit.id_utilisateur=sumdepot.id_utilisateur ;

----- STATISTIQUES -----------

CREATE OR REPLACE VIEW OffresFavorisCredit AS
SELECT Count(Mouvement_credit.id_offre) as occurence,Offres.* FROM Mouvement_credit,Offres 
GROUP BY Mouvement_credit.id_offre,offres.id_offre 
ORDER BY occurence DESC Limit 10;

---------- VRAI Solde et credit d'un compte -------------
CREATE OR REPLACE View CurrentCompteSolde AS
SELECT * from comptes order by date_solde desc limit 1;

--------- Solde appel des clients
CREATE OR REPLACE VIEW OffreAppelClient AS
SELECT clients.id_utilisateur,clients.numero,comptes.credit,comptes.valeur_offre,comptes.date_expiration,
comptes.date_solde FROM clients,comptes WHERE clients.id_utilisateur = comptes.id_utilisateur AND 
comptes.valeur_offre != '0' AND comptes.date_expiration > now() ORDER BY date_expiration ASC;

-------- Mon compte
CREATE OR REPLACE View dataCompteValide AS 
SELECT* FROM Comptes where date_expiration > now() ORDER BY date_solde ASC; 

--------SumCredit
create or replace view sumCredit as
select clients.numero,sum(mouvement_credit.montant::float) as credit from clients left join mouvement_credit on clients.id_utilisateur=mouvement_credit.id_utilisateur
where mouvement_credit.type='creditation' group by clients.numero;

--------SumDepot
create or replace view sumDepot as
select clients.numero,sum(mouvement_money.montant::float) as Money from clients left join mouvement_money on clients.id_utilisateur=mouvement_money.id_utilisateur
where mouvement_money.type='Depot' and mouvement_money.status='Valide' group by clients.numero;

--------SumTotal
create or replace view clientFavoris as
select sumCredit.numero,sumCredit.credit,sumDepot.money,(sumCredit.credit+sumDepot.money)as total from sumCredit join
sumDepot on sumCredit.numero=sumDepot.numero order by total desc limit 10;