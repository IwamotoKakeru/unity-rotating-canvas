using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoardInput : MonoBehaviour
{
    Texture2D drawTexture;
    Color[] buffer;

    Vector2 prevUVPosition = Vector2.zero;

    void Start()
    {
        Texture2D mainTexture = (Texture2D)GetComponent<Renderer>().material.mainTexture;
        Color[] pixels = mainTexture.GetPixels();

        buffer = new Color[pixels.Length];
        pixels.CopyTo(buffer, 0);

        drawTexture = new Texture2D(
            mainTexture.width,
            mainTexture.height,
            TextureFormat.RGBA32,
            false
        );
        drawTexture.filterMode = FilterMode.Point;
    }

    public void Draw(Vector2 p, int thickness)
    {
        for (int x = 0; x < drawTexture.width; x++)
        {
            for (int y = 0; y < drawTexture.height; y++)
            {
                // 距離の二乗と太さの二乗を比較
                if ((p - new Vector2(x, y)).sqrMagnitude < thickness*thickness)
                {
                    buffer.SetValue(Color.black, x + drawTexture.height * y);
                }
            }
        }
    }

    public void LiteDraw(Vector2 p, float thickness){
        for (int x=0; x< thickness; x++){
            for (int y=0; y<thickness; y++){
                
            }
        }

    }

    public void LerpDraw(Vector2 point, Vector2 prevPoint)
    {

    }

    void Update()
    {
        if (Input.GetMouseButton(0))
        {

            Vector2 endPosition = Input.mousePosition;


            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;


            if (Physics.Raycast(ray, out hit, 100.0f))
            {
                Vector2 uvPosition = hit.textureCoord * drawTexture.width;
                if (prevUVPosition == Vector2.zero) prevUVPosition = uvPosition;

                Draw(uvPosition, 4);

                prevUVPosition = uvPosition;
            }

            drawTexture.SetPixels(buffer);
            drawTexture.Apply();
            GetComponent<Renderer>().material.mainTexture = drawTexture;
        }
    }
}
