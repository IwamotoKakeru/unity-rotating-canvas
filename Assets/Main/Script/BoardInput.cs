using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoardInput : MonoBehaviour
{
    Texture2D drawTexture;
    Color[] buffer;

    private Vector2 _prevPosition;

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

    public void Draw(Vector2 p)
    {
        for (int x = 0; x < 256; x++)
        {
            for (int y = 0; y < 256; y++)
            {
                if ((p - new Vector2(x, y)).magnitude < 5)
                {
                    buffer.SetValue(Color.black, x + 256 * y);
                }
            }
        }
    }

    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            if (_prevPosition == Vector2.zero)
            {
                _prevPosition = Input.mousePosition;
            }

            Vector2 endPosition = Input.mousePosition;

            float lineLength = Vector2.Distance(_prevPosition, endPosition);

            int lerpCountAdjustNum = 5;
            int lerpCount = Mathf.CeilToInt(lineLength / lerpCountAdjustNum);

            for (int i = 1; i <= lerpCount; i++)
            {
                float lerpWeight = (float)i / lerpCount;

                Vector3 lerpPosition = Vector2.Lerp(_prevPosition, Input.mousePosition, lerpWeight);

                Ray ray = Camera.main.ScreenPointToRay(lerpPosition);
                RaycastHit hit;

                if (Physics.Raycast(ray, out hit, 100.0f))
                {
                    Draw(hit.textureCoord * 256);
                }

                drawTexture.SetPixels(buffer);
                drawTexture.Apply();
                GetComponent<Renderer>().material.mainTexture = drawTexture;
            }

            _prevPosition = Input.mousePosition;

        }
        else
        {
            _prevPosition = Vector2.zero;
        }
    }
}
