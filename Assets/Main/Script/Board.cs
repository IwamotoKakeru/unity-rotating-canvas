using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(BoardInput), typeof(BoardMovement))]
public class Board : MonoBehaviour
{
    [SerializeField] private BoardInput boardInput;
    [SerializeField] private BoardMovement boardMovement;

    void Start()
    {
        boardInput = GetComponent<BoardInput>();
        boardMovement = GetComponent<BoardMovement>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
