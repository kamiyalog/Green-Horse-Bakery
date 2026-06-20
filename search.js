function search() {
  const q = document.getElementById("searchBox").value.trim();

  if (q === "AG-1234") {
    window.location.href = "data.html";
  } else if (q === "送迎") {
    window.location.href = "transport.html";
  } else if (q === "緑馬宗司") {
    window.location.href = "profile-soji.html";
  } else if (q === "ベーカリーあかむね") {
    window.location.href = "thread-archive.html";
  } else if (q === "緑馬涼子") {
    window.location.href = "registry-ryoko.html";
  } else if (q === "早川ベーカリー") {
    window.location.href = "hayakawa-bakery.html";
} else if (q === "東雲大学") {
  window.location.href = "shinonome-award.html";
} else if (q === "明坂朱里") {
  window.location.href = "member-akari.html";
} else if (q === "会員登録") {
  window.location.href = "member-register.html";
} else if (q === "会員限定予約") {
  window.location.href = "member-reservation.html";
} else if (q === "最上送迎") {
  window.location.href = "mogami-transport.html";
} else if (q === "AA-5381") {
  window.location.href = "adaptive-data.html";
} else if (q === "東雲生体適応研究所") {
  window.location.href = "shinonome-research.html";

  } else {
    alert("該当データは存在しません");
  }
}