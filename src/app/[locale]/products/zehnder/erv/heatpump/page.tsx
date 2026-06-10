import ProductDetail from "@/components/products/ProductDetail";

export default function HeatPumpPage() {
  return (
    <ProductDetail
      breadcrumb={{
        grandparent: { label: "Бүтээгдэхүүн", href: "/products" },
        parent: { label: "ERV Систем", href: "/products/zehnder/erv" },
        current: "HeatPump",
      }}
      brand="ZEHNDER"
      title="HeatPump хосолсон"
      subtitle="Илүү дулааны үр ашиг"
      description="HeatPump хосолсон агааржуулалтын төхөөрөмж. Илүү дулааны үр ашигтай, өвлийн хүйтэнд илүү тогтвортой."
      longDescription="HeatPump хосолсон агааржуулалтын төхөөрөмж нь ердийн ERV системээс илүү дулааны үр ашигтай. HeatPump технологи нь агааржуулалтын явцад дулааныг нэмэгдүүлж, өвлийн хүйтэнд ч өрөөний температурыг тогтвортой барьж чадна.\n\nPTC PreHeater нь нэмэлт дулааныг хангаж, хамгийн хүйтэн өдрүүдэд ч ажиллах боломжтой.\n\nУхаалаг аппликейшнээр удирдах боломжтой тул хаанаас ч хянах, тохируулах боломжтой."
      image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
      specs={{
        "Агаарын хэмжээ": "120-500 м³/цаг",
        "Үр ашиг": "ER 60%, HR 70%",
        "Халаагч": "PTC PreHeater",
        "Удирдлага": "APP боломжтой",
        "Хэмжээ": "Том",
        "Жин": "30-45 кг",
        "Хүчдэл": "220V/50Hz",
        "Чадал": "1.5-3 кВт",
      }}
      keyFeatures={[
        "HeatPump технологи",
        "PTC PreHeater",
        "Ухаалаг аппликейшн удирдлага",
        "Өндөр дулааны үр ашиг",
        "Өвлийн хүйтэнд тогтвортой",
        "Монголын уур амьсгалд тохирсон",
      ]}
      models={["CHM120", "CHM200", "CHM300", "CHM500"]}
      warranty="3 жилийн баталгаа"
      category="ERV"
    />
  );
}
