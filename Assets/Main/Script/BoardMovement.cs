using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class BoardMovement : MonoBehaviour
{

    // [SerializeField] private float rotationSpeed = 120.0f;
    public float RotationSpeed { get; set; }
    void Start()
    {
        this.RotationSpeed = 120.0f;
    }
    void Update()
    {
        transform.Rotate(0f, this.RotationSpeed * Time.deltaTime, 0f);
    }
}
