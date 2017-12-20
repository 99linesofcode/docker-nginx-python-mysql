start:
	docker-compose -f docker-compose.yml up

reset:
	docker-compose stop
	docker system prune -f
	docker volume prune -f
