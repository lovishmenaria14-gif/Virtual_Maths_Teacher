let innerUploadImage = document.querySelector(".inner-upload-image");
let input = document.querySelector("input");
let button = document.querySelector(".answer-btn");
let output = document.querySelector(".output");

let selectedFile = null;

innerUploadImage.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", () => {
    selectedFile = input.files[0];

    if (selectedFile) {
        document.querySelector(".inner-upload-image span").innerText =
            selectedFile.name;
    }
});

button.addEventListener("click", async () => {
    if (!selectedFile) {
        output.innerText = "Please upload an image first.";
        return;
    }

    const reader = new FileReader();

    reader.onload = async (e) => {
        const base64Image = e.target.result.split(",")[1];

        output.innerText = "Solving...";

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=GEMINI_API_KEY`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: "You are a maths teacher. Solve the question in this image step by step."
                                    },
                                    {
                                        inline_data: {
                                            mime_type: selectedFile.type,
                                            data: base64Image
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }
            );

            const data = await response.json();

            output.innerText =
                data.candidates?.[0]?.content?.parts?.[0]?.text ||
                "No response received.";
        } catch (err) {
            console.log(err);
            output.innerText = "Something went wrong.";
        }
    };

    reader.readAsDataURL(selectedFile);
});


