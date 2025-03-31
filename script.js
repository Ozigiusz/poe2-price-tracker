async function searchItem() {
    const itemName = document.getElementById("itemName").value;
    if (!itemName) {
        alert("Wpisz nazwę przedmiotu!");
        return;
    }

    const url = `https://www.pathofexile.com/api/trade2/search/Ancestor`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Błąd pobierania danych!");

        const data = await response.json();
        console.log(data); // Sprawdź w konsoli, co zwraca API
    } catch (error) {
        console.error(error);
        alert("Nie udało się pobrać danych.");
    }
}
