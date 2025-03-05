def calcular_saldo(vitorias, derrotas):
    # Calculando o saldo de vitórias
    saldoVitorias = vitorias - derrotas
    
    # Determinando o nível com base nas vitórias
    if vitorias < 10:
        nivel = "Ferro"
    elif 10 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"
    
    # Exibindo a mensagem final
    print(f"O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}")

# Solicitação de entrada de dados
vitorias = int(input("Digite a quantidade de vitórias: "))
derrotas = int(input("Digite a quantidade de derrotas: "))

# Chamada da função para calcular e mostrar o resultado
calcular_saldo(vitorias, derrotas)

