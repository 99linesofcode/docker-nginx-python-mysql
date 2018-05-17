include .env

clean:
	rm -rf data/db/mysql/*

docker-start:
	docker-compose up -d

docker-stop:
	docker-compose down -v
	@make clean
