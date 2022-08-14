docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss35/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss35/app ../..
