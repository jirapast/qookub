FROM python:3.8-slim-buster
LABEL "name"="backend"
WORKDIR /
COPY /app /app
# RUN pip install -r /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
EXPOSE 8081
# CMD [ "python3" , "main.py" ]
CMD ["uvicorn", "app.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "8081"]