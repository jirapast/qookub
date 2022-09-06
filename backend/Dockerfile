FROM python:3.8-slim-buster
WORKDIR /
COPY /app /app
# RUN pip install -r /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
EXPOSE 4000
# CMD [ "python3" , "main.py" ]
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "4000"]
CMD ["uvicorn", "app.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "4000"]
# uvicorn main:app --proxy-headers --host 0.0.0.0 --port 4000