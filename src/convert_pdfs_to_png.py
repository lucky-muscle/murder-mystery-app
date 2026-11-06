from pathlib import Path
import fitz  # PyMuPDF

# プロジェクト直下で実行してください。
# 事前に: pip install pymupdf
# 出力ルール:
#   複数ページPDF -> xxx-1.png, xxx-2.png ...
#   1ページPDF   -> xxx.png

ZOOM = 2.5

TARGET_PDFS = [
    Path("public/sheets/rule-sheet.pdf"),
    Path("public/sheets/overview-sheet.pdf"),
    Path("public/sheets/maps/floor-map.pdf"),

    Path("public/sheets/characters/kawagishi-michiya.pdf"),
    Path("public/sheets/characters/umemura-moe.pdf"),
    Path("public/sheets/characters/midorino-daichi.pdf"),
    Path("public/sheets/characters/kurosaka-hideki.pdf"),
    Path("public/sheets/characters/tani-alice.pdf"),
]

# investigation / special-investigation / endings 内のPDFもまとめて変換したい場合は、
# AUTO_FOLDERS に入れておくと *.pdf を全部変換します。
AUTO_FOLDERS = [
    Path("public/sheets/investigation"),
    Path("public/sheets/special-investigation"),
    Path("public/sheets/endings"),
    Path("public/sheets/additional"),
]


def convert_pdf_to_png(pdf_path: Path):
    if not pdf_path.exists():
        print(f"skip: 見つかりません: {pdf_path}")
        return

    doc = fitz.open(pdf_path)

    for page_index in range(len(doc)):
        page = doc[page_index]
        matrix = fitz.Matrix(ZOOM, ZOOM)
        pix = page.get_pixmap(matrix=matrix, alpha=False)

        if len(doc) == 1:
            output_path = pdf_path.with_suffix(".png")
        else:
            output_path = pdf_path.with_name(f"{pdf_path.stem}-{page_index + 1}.png")

        pix.save(output_path)
        print(f"converted: {pdf_path} -> {output_path}")

    doc.close()


def main():
    pdf_files = []
    pdf_files.extend(TARGET_PDFS)

    for folder in AUTO_FOLDERS:
        if folder.exists():
            pdf_files.extend(sorted(folder.glob("*.pdf")))

    seen = set()
    unique_pdf_files = []
    for pdf_path in pdf_files:
        normalized = pdf_path.as_posix()
        if normalized in seen:
            continue
        seen.add(normalized)
        unique_pdf_files.append(pdf_path)

    for pdf_path in unique_pdf_files:
        convert_pdf_to_png(pdf_path)

    print("done")


if __name__ == "__main__":
    main()
