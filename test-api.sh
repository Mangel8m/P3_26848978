#!/bin/bash

# Script para probar la API localmente
# Uso: ./test-api.sh

BASE_URL="http://localhost:3000"

echo "=== Probando API P3_26848978 ==="
echo ""

# Test 1: Ping
echo "1. GET /ping"
curl -s -o /dev/null -w "Status: %{http_code}\n" $BASE_URL/ping
echo ""

# Test 2: About
echo "2. GET /about"
curl -s $BASE_URL/about | jq '.'
echo ""

# Test 3: Register
echo "3. POST /auth/register"
REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Usuario Prueba",
    "email": "prueba@test.com",
    "password": "password123"
  }')
echo $REGISTER_RESPONSE | jq '.'
echo ""

# Test 4: Login
echo "4. POST /auth/login"
LOGIN_RESPONSE=$(curl -s -X POST $BASE_URL/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "prueba@test.com",
    "password": "password123"
  }')
echo $LOGIN_RESPONSE | jq '.'

# Extraer token
TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.data.token')
echo ""
echo "Token obtenido: ${TOKEN:0:50}..."
echo ""

# Test 5: Get Users (protegido)
echo "5. GET /users (con token)"
curl -s $BASE_URL/users \
  -H "Authorization: Bearer $TOKEN" | jq '.'
echo ""

# Test 6: Get Users sin token
echo "6. GET /users (sin token - debe fallar)"
curl -s -o /dev/null -w "Status: %{http_code}\n" $BASE_URL/users
echo ""

echo "=== Pruebas completadas ==="
echo ""
echo "Documentacion disponible en: $BASE_URL/api-docs"
