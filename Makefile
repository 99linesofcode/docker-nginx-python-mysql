docker-start:
	docker-compose -f docker-compose.yml up

docker-reset:
	docker-compose down -v
	docker system prune -f
	docker volume prune -f
